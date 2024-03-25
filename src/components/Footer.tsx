'use client'

import { FC } from "react";
import { Box, Typography } from '@mui/material';

interface FooterProps {
  siteName: string;
}

const Footer: FC<FooterProps> = ({ siteName }) => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-4 footer">
      <Box sx={{ py: 2 }}>
        <Typography variant="body2" align="center" className="flex items-center">
          <img src="/next.svg" alt="Logo" width="80" />
          <span className="pl-4 text-2xl">© 2024 {siteName}</span>
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer;