'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'

// import Dropzone from 'react-dropzone'
import { Cloud, File, Loader2 } from 'lucide-react'
// import { Progress } from './ui/progress'
// import { useUploadThing } from '@/lib/uploadthing'
// import { useToast } from './ui/use-toast'
import { trpc } from '@/app/_trcp/client'
import { useRouter } from 'next/navigation'

const UploadDropzone = ({
  isSubscribed,
}: {
  isSubscribed: boolean
}) => {
  const router = useRouter()

  const [isUploading, setIsUploading] =
    useState<boolean>(false)
  const [uploadProgress, setUploadProgress] =
    useState<number>(0)
  // const { toast } = useToast()

 

  
  const startSimulatedProgress = () => {
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval)
          return prevProgress
        }
        return prevProgress + 5
      })
    }, 500)

    return interval
  }

  
}

const UploadButton = ({
  isSubscribed,
}: {
  isSubscribed: boolean
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v)
        }
      }}>
      <DialogTrigger
        onClick={() => setIsOpen(true)}
        asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        {/* <UploadDropzone  isSubscribed={true} /> */}
      </DialogContent>
    </Dialog>
  )
}

export default UploadButton