import { defineConfig } from 'npm:vite@^4.3.9'
import react from 'npm:@vitejs/plugin-react@^4.0.0'
import million from 'npm:million@2.6.0-beta.13/compiler'
import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0/client'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()]
})
