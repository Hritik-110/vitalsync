import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Verify = () => {
    const { backendUrl, token } = useContext(AppContext)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const query = new URLSearchParams(location.search)
        const success = query.get('success')
        const appointmentId = query.get('appointmentId')

        if (success === 'true' && appointmentId) {
            axios.post(`${backendUrl}/api/user/verifyStripe`, { appointmentId, success }, {
                headers: { token }
            })
                .then(({ data }) => {
                    if (data.success) {
                        toast.success('Payment verified successfully!')
                    } else {
                        toast.error(data.message)
                    }
                    navigate('/my-appointments')
                })
                .catch(err => {
                    console.error(err)
                    toast.error('Payment verification failed')
                    navigate('/my-appointments')
                })
        } else {
            toast.error('Payment failed or canceled')
            navigate('/my-appointments')
        }
    }, [location.search])

    return <div className="p-8 text-center">Verifying payment...</div>
}

export default Verify
