/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#0a0a0f',
  			foreground: '#ffffff',
  			card: {
  				DEFAULT: '#111116',
  				foreground: '#ffffff'
  			},
  			popover: {
  				DEFAULT: '#13131a',
  				foreground: '#ffffff'
  			},
  			primary: {
  				DEFAULT: '#00F0FF',
  				foreground: '#000000'
  			},
  			secondary: {
  				DEFAULT: '#E55CFF',
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: '#1f1f23',
  				foreground: '#a1a1aa'
  			},
  			accent: {
  				DEFAULT: '#1f1f23',
  				foreground: '#ffffff'
  			},
  			destructive: {
  				DEFAULT: '#ef4444',
  				foreground: '#f8fafc'
  			},
  			border: '#27272a',
  			input: '#27272a',
  			ring: '#00F0FF',
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
