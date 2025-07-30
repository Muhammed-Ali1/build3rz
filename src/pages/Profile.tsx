import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseclient'
import { useOpenConnectModal } from '@0xsequence/connect'

const Profile = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const navigate = useNavigate()

  const { setOpenConnectModal } = useOpenConnectModal()

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        setUserEmail(data.user.email ?? null)
      } else {
        setUserEmail(null)
      }
    }
    fetchUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUserEmail(null)
  }

  const handleWalletConnect = () => {
    setOpenConnectModal(true)
  }

  const handleWalletDisconnect = async () => {
    setWalletAddress(null)
    // Additional disconnect logic can be added here
  }

  return (
    <div className="pt-6 pb-20 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>

      {/* Supabase Login Section */}
      {userEmail ? (
        <>
          <p className="mb-3">Signed in as: {userEmail}</p>
          <button
            onClick={handleSignOut}
            className="bg-purple-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-purple-500"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p className="mb-3">You are not signed in</p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-purple-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-purple-500"
          >
            Go Sign Up
          </button>
        </>
      )}

      <hr className="my-6 border-zinc-700" />

      {/* Wallet Connect Section */}
      {walletAddress ? (
        <>
          <p className="mb-3">Wallet Connected:</p>
          <p className="mb-4 font-mono text-green-400">{walletAddress}</p>
          <button
            onClick={handleWalletDisconnect}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            Disconnect Wallet
          </button>
        </>
      ) : (
        <button
          onClick={handleWalletConnect}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default Profile











