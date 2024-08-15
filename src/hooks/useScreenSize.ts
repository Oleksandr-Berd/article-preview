import { useMediaQuery } from "usehooks-ts"

export const useScreenSize = () => {
const isDesktop = useMediaQuery("(min-width:1280px)")

return {isDesktop}
}