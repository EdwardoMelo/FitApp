import React, { useEffect, useState } from 'react';
import { Icon, Stack, Typography } from '@mui/material';
import Icons from '../utils/getIcons';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const [IconSrc, setIconSrc] = useState();
  useEffect(() => {
    const BodyPartIcon = Icons.filter((icon) => (icon.iconName === item ? icon.value : ''));
    setIconSrc(...BodyPartIcon);
  }, []);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #e3f6f5', background: 'rgba(255, 255, 255, 0.2)', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: 'rgba(255, 255, 255, 0.2)', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(10px)' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      {IconSrc ? (
        <img
          src={IconSrc.value}
          alt="dumbbell"
          style={{ width: '90px', height: '90px', backgroundColor: '#5c5470' }}
        />
      ) : (<span>Loading</span>)}
      <Typography fontSize="24px" fontWeight="normal" letterSpacing="1.2px" color="#e3f6f5" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
};

export default BodyPart;
