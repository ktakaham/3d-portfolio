export const pagesPath = {
  "dnd": {
    $url: (url?: { hash?: string }) => ({ pathname: '/dnd' as const, hash: url?.hash })
  },
  "main": {
    $url: (url?: { hash?: string }) => ({ pathname: '/main' as const, hash: url?.hash })
  },
  "portfolio": {
    $url: (url?: { hash?: string }) => ({ pathname: '/portfolio' as const, hash: url?.hash })
  }
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  _DS_Store: '/.DS_Store',
  earth: {
    license_txt: '/earth/license.txt',
    scene_bin: '/earth/scene.bin',
    scene_gltf: '/earth/scene.gltf',
    textures: {
      Material_002_diffuse_jpeg: '/earth/textures/Material.002_diffuse.jpeg'
    }
  },
  favicon_ico: '/favicon.ico',
  model_glb: '/model.glb',
  untitled_glb: '/untitled.glb',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
