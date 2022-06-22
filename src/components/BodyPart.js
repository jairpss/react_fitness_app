import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'


function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop : bodyPart === item ? '4px solid #ff2625' : '' ,
          borderTop: '4px solid #ff2625',
          backgroundColor: '#FFF',
          borderBottomLeftRadius: '20px', 
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px'
        }}
    >
      <img src={Icon} alt='dumbell' styles= {{
        width: '40px',
        height: '40px'
      }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Plus Jakarta Sans" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart