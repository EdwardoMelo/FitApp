import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading';

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant="h4" mb="33px" textAlign="center" color="#5585b5">
        Watch <span style={{ textTransform: 'capitalize', color: '#8dc6ff' }}>{ name } </span> exercise videos.
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{
                borderTopLeftRadius: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
              }}
            />
            <Box>
              <Typography variant="h5" color="#e3f6f5">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#e3f6f5">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>

  );
};

export default ExerciseVideos;
