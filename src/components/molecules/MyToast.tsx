import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const MyToast = () => {
  return (
    <>
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "info",
        })
      }
      >
      Show Toast
    </Button>
    <MyToast />
      </>
    
  )
};