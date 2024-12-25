import path from 'path'
import fs from 'fs'
import sharp from 'sharp'
import heicConvert from 'heic-convert'
const saveFile = async ({ buffer, storePath }: { buffer: Buffer; storePath: string }) => {
  try {
    console.log('inside save file')
    fs.writeFile(storePath, buffer, (err: any) => {
      if (err) throw new Error(err)
    })
    return storePath
  } catch (err: any) {
    throw new Error(err)
  }
}

const uploadImage = async ({ filePath, fileName, base64 }: { filePath: string; fileName: string; base64: string }) => {
  try {
    console.log('inside upload')
    const buffer = Buffer.from(base64, 'base64')
    console.log(buffer,'buffer value')
    const name = fileName.split('.')[0]
    console.log(name,'name')
    const extension = fileName.split('.').pop()?.toLowerCase()
    console.log(extension,'extension')
    const folderPath = path.join(__dirname, '../../uploads', filePath)
    console.log(folderPath,' folder path')
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }
    if (extension === 'heic' || extension === 'heif') {
      const pngFileName = `${name}.png`
      try {
        const formatBuffer = await sharp(buffer).resize({ width: 550 }).toFormat('png', { quality: 80 }).toBuffer()
        console.log(formatBuffer, 'formateBuffer')
        const pngFileName = `${name}.png`
        await saveFile({
          buffer: formatBuffer,
          storePath: path.join(folderPath, pngFileName),
        })
      } catch (err) {
        const formatBuffer: any = await heicConvert({
          buffer,
          format: 'PNG',
          quality: 0.8,
        })
        await saveFile({
          buffer: formatBuffer,
          storePath: path.join(folderPath, pngFileName),
        })
      }

      return `uploads/${filePath}/${pngFileName}`
    } else {
      const webpFileName = `${name}.webp`
      console.log(webpFileName,'webp file name')
      const formatBuffer = await sharp(buffer).resize({ width: 550 }).toFormat('webp', { quality: 80 }).toBuffer()
      console.log(buffer,'formateBuffer')
      await saveFile({
        buffer: buffer,
        storePath: path.join(folderPath, webpFileName),
      })
      return `uploads/${filePath}/${webpFileName}`
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

export default uploadImage