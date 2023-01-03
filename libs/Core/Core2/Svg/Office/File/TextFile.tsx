import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgTextFile({
  width,
  fill,
  fill2,
}: ISvg) {

  fill2 = fill2 || fill
  return(<>
    <Svg viewBox="-4 0 64 64" width={width} fill={fill}>
      <path fill={fill} d="M5.151-.036c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.902-20.31h-31.946z" fillRule="evenodd" clipRule="evenodd"/>
      <path fill="#fff" d="M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799l-18.903-20.353z" opacity=".5"/>
      <path fill="#fff" d="M18.763 43.045h-3.277v10.047c0 .414-.324.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685 0 .359-.288.647-.648.647zm11.7 10.803c-.216 0-.415-.089-.541-.27l-3.727-4.97-3.745 4.97c-.126.181-.324.27-.54.27-.396 0-.72-.306-.72-.72 0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826c-.09-.126-.144-.27-.144-.414 0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646c.126-.18.324-.27.541-.27.378 0 .738.306.738.721 0 .144-.036.288-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415 0 .396-.325.738-.721.738zm11.195-10.803h-3.277v10.047c0 .414-.323.738-.756.738-.414 0-.738-.324-.738-.738v-10.047h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685.001.359-.287.647-.648.647z"/>
    </Svg>
  </>)
}