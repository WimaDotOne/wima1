import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgProfile2({
  width,
  stroke,
  strokeWidth
}: ISvg) {

  strokeWidth = strokeWidth || 1
  return(<>
    <Svg viewBox="0 0 13 16" width={width} stroke={stroke} strokeWidth={strokeWidth}>
      <ellipse cx="6.71856" cy="4.85235" rx="3.18536" ry="3.18535" strokeLinecap="round" strokeLinejoin="round">
      </ellipse>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.66603 12.4677C1.66517 12.2438 1.71525 12.0226 1.81248 11.8209C2.11759 11.2106 2.978 10.8872 3.69196 10.7408C4.20687 10.6309 4.72889 10.5575 5.25413 10.5211C6.22657 10.4357 7.20464 10.4357 8.17709 10.5211C8.70228 10.5579 9.22427 10.6313 9.73925 10.7408C10.4532 10.8872 11.3136 11.1801 11.6187 11.8209C11.8143 12.2321 11.8143 12.7094 11.6187 13.1206C11.3136 13.7614 10.4532 14.0543 9.73925 14.1946C9.22495 14.3091 8.70275 14.3845 8.17709 14.4204C7.38559 14.4875 6.59041 14.4997 5.79722 14.457C5.61416 14.457 5.43719 14.457 5.25413 14.4204C4.73044 14.385 4.21023 14.3095 3.69806 14.1946C2.978 14.0543 2.12369 13.7614 1.81248 13.1206C1.71575 12.9166 1.66572 12.6935 1.66603 12.4677Z" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  </>)
}