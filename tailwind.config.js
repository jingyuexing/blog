import { 
  addCleanIconSelectors,
  addDynamicIconSelectors 
} from "@iconify/tailwind";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addCleanIconSelectors(),
    addDynamicIconSelectors()
  ],
}

