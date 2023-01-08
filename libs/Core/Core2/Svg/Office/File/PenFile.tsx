import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgPenFile({
  width,
  fill,
  fill2,
}: ISvg) {

  fill = fill || "#000"

  if(fill.includes("#")) {
    if(fill.length === 7) {
      fill2 = fill + "55"
    } else {
      if(fill.length === 4) {
        fill2 = fill + "5"
      }
    }
  } else {
    fill2 = fill2 || fill
  }

  return(<>
    <Svg viewBox="0 0 392.555 392.555" width={width} fill={fill}>
    <path fill={fill2} d="M215.402,291.857l-14.158,30.966c-1.616,3.491-4.848,5.883-8.663,6.335c0,0-50.36,5.689-50.877,5.689
      c-6.853-0.323-11.442-5.883-10.796-12.154l5.624-49.713c0.453-3.814,2.844-7.111,6.335-8.663l30.966-14.222
      c-0.453-2.392-0.259-4.848,1.034-7.111c13.576-26.053,39.046-58.57,69.689-89.341c6.206-6.206,12.929-12.606,19.911-18.941V32.69
      c0-6.012-4.849-10.925-10.925-10.925h-92.444v56.113c0,6.012-4.848,10.925-10.925,10.925H21.786v270.998
      c0,6.012,4.848,10.925,10.925,10.925h220.897c6.012,0,10.925-4.848,10.925-10.925V263.09c-14.869,11.572-29.22,21.075-41.891,27.733
      C221.026,291.663,217.794,292.633,215.402,291.857z"/>
    <polygon fill="#fff" points="139.442,28.1 50.941,66.952 139.442,66.952 "/>
    <path fill={fill2} d="M370.489,94.88c-0.065,0.065-27.022-6.012-110.481,74.343c-26.44,26.505-48.679,54.174-61.996,77.123
      l21.398,21.398c22.949-13.382,50.554-35.556,76.994-62.061C352.97,149.053,374.562,103.671,370.489,94.88z"/>
    <polygon fill="white" points="157.543,281.643 154.246,311.51 184.048,308.213 198.206,277.247 188.509,267.486 "/>
    <g>
      <path d="M71.952,141.296h145.131c6.012,0,10.925-4.848,10.796-10.925c0-6.012-4.848-10.925-10.925-10.925
        H71.952c-6.012,0-10.925,4.848-10.925,10.925C61.026,136.447,65.939,141.296,71.952,141.296z"/>
      <path d="M71.952,203.486h91.798c6.012,0,10.925-4.848,10.796-10.925c0-6.012-4.848-10.925-10.925-10.925
        H71.952c-6.012,0-10.925,4.848-10.925,10.925C61.026,198.637,65.939,203.486,71.952,203.486z"/>
      <path d="M106.085,243.954H71.952c-6.012,0-10.925,4.848-10.925,10.925c0,6.077,4.848,10.925,10.925,10.925
        h34.133c6.012,0,10.925-4.848,10.925-10.925C117.01,248.803,112.097,243.954,106.085,243.954z"/>
      <path d="M106.085,306.144H71.952c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.848,10.925,10.925,10.925
        h34.133c6.012,0,10.925-4.848,10.925-10.925S112.097,306.144,106.085,306.144z"/>
      <path d="M386.069,79.494c-21.075-21.01-70.077,12.735-99.685,36.719V32.754
        c0-18.036-14.675-32.711-32.711-32.711h-97.745c-5.236,0-10.537,1.293-15.192,3.685c0,0-123.41,54.238-123.733,54.432
        C6.594,63.785,0,74.839,0,86.799v273.002c0,18.036,14.675,32.711,32.711,32.711h220.897c18.036,0,32.711-14.675,32.711-32.711
        V244.924c8.469-7.499,17.067-15.451,25.471-23.984C351.871,180.924,412.574,105.999,386.069,79.494z M139.442,28.1v38.853H50.877
        L139.442,28.1z M264.469,359.801c0,6.012-4.849,10.925-10.925,10.925H32.711c-6.012,0-10.925-4.848-10.925-10.925V88.738h128.582
        c6.012,0,10.925-4.848,10.925-10.925V21.7h92.315c6.012,0,10.925,4.848,10.925,10.925v102.077
        c-7.046,6.335-13.77,12.735-19.911,18.941c-30.707,30.772-56.113,63.289-69.689,89.341c-1.164,2.263-1.487,4.784-1.034,7.111
        l-30.901,14.287c-3.491,1.616-5.883,4.848-6.335,8.663l-5.624,49.713c-0.646,6.271,3.943,11.83,10.796,12.154
        c0.388,0,50.877-5.689,50.877-5.689c3.814-0.453,7.111-2.844,8.663-6.335l14.158-30.966c2.392,0.711,5.56-0.259,7.176-1.034
        c12.735-6.659,27.022-16.226,41.891-27.733v96.646H264.469z M188.509,267.486l9.632,9.632l-14.158,30.966l-29.802,3.426
        l3.426-29.931L188.509,267.486z M296.404,205.619c-26.44,26.505-54.044,48.679-76.994,62.061l-21.398-21.398
        c13.317-22.949,35.556-50.618,61.996-77.123c83.459-80.356,110.416-74.279,110.481-74.343
        C374.562,103.671,352.97,149.053,296.404,205.619z"/>
      </g>

    </Svg>
  </>)
}
