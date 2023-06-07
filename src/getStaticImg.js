const getStaticImg = (name)=>{
  return new URL(`../../public/assets/${name}`, import.meta.url).href
}
export default getStaticImg