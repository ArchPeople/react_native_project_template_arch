import { ds } from '@core/general-helpers/extensions';

export const themeFonts = {
  // Font Height
  get fh1() {
    return { lineHeight: ds(14) };
  },
  get fh1_5() {
    return { lineHeight: ds(16) };
  },
  get fh2() {
    return { lineHeight: ds(18) };
  },
  get fh2_5() {
    return { lineHeight: ds(20) };
  },

  // Main font sizes
  get fs8() {
    return { fontSize: ds(8) };
  },
  get fs10() {
    return { fontSize: ds(10) };
  },
  get fs12() {
    return { fontSize: ds(12) };
  },
  get fs14() {
    return { fontSize: ds(14) };
  },
  get fs16() {
    return { fontSize: ds(16) };
  },
  get fs18() {
    return { fontSize: ds(18) };
  },
  get fs19() {
    return { fontSize: ds(19.2) };
  },
  get fs20() {
    return { fontSize: ds(20) };
  },
  get fs22() {
    return { fontSize: ds(22.4) };
  },
  get fs24() {
    return { fontSize: ds(24) };
  },
  get fs25() {
    return { fontSize: ds(25.6) };
  },
  get fs28() {
    return { fontSize: ds(28) };
  },
  get fs32() {
    return { fontSize: ds(32) };
  },
  get fs36() {
    return { fontSize: ds(36) };
  },
  get fs40() {
    return { fontSize: ds(40) };
  },
  get fs48() {
    return { fontSize: ds(48) };
  },
  get fs56() {
    return { fontSize: ds(56) };
  },
  get fs64() {
    return { fontSize: ds(64) };
  },
  get fs72() {
    return { fontSize: ds(72) };
  },
  get fs80() {
    return { fontSize: ds(80) };
  },
  get fs88() {
    return { fontSize: ds(88) };
  },
  get fs96() {
    return { fontSize: ds(96) };
  },

  // Font weights
  get extraBold() {
    return { fontWeight: '800' };
  },
  get bold() {
    return { fontWeight: '700' };
  },
  get semiBold() {
    return { fontWeight: '600' };
  },
  get medium() {
    return { fontWeight: '500' };
  },
  get regular() {
    return { fontWeight: '400' };
  },
  get light() {
    return { fontWeight: '300' };
  },

  // Font Style
  get italic() {
    return { fontStyle: 'italic' };
  },

  ///////////////////////////// FONT BY SIZE //////////////////////////////

  // Font sizes display
  get d1Light() {
    return { ...this.fs96, ...this.light };
  },
  get d1Regular() {
    return { ...this.fs96, ...this.regular };
  },
  get d1Medium() {
    return { ...this.fs96, ...this.medium };
  },
  get d1SemiBold() {
    return { ...this.fs96, ...this.semiBold };
  },
  get d1Bold() {
    return { ...this.fs96, ...this.bold };
  },
  get d1ExtraBold() {
    return { ...this.fs96, ...this.extraBold };
  },

  get d2Light() {
    return { ...this.fs72, ...this.light };
  },
  get d2Regular() {
    return { ...this.fs72, ...this.regular };
  },
  get d2Medium() {
    return { ...this.fs72, ...this.medium };
  },
  get d2SemiBold() {
    return { ...this.fs72, ...this.semiBold };
  },
  get d2Bold() {
    return { ...this.fs72, ...this.bold };
  },
  get d2ExtraBold() {
    return { ...this.fs72, ...this.extraBold };
  },

  get d3Light() {
    return { ...this.fs64, ...this.light };
  },
  get d3Regular() {
    return { ...this.fs64, ...this.regular };
  },
  get d3Medium() {
    return { ...this.fs64, ...this.medium };
  },
  get d3SemiBold() {
    return { ...this.fs64, ...this.semiBold };
  },
  get d3Bold() {
    return { ...this.fs64, ...this.bold };
  },
  get d3ExtraBold() {
    return { ...this.fs64, ...this.extraBold };
  },

  get d4Light() {
    return { ...this.fs56, ...this.light };
  },
  get d4Regular() {
    return { ...this.fs56, ...this.regular };
  },
  get d4Medium() {
    return { ...this.fs56, ...this.medium };
  },
  get d4SemiBold() {
    return { ...this.fs56, ...this.semiBold };
  },
  get d4Bold() {
    return { ...this.fs56, ...this.bold };
  },
  get d4ExtraBold() {
    return { ...this.fs56, ...this.extraBold };
  },

  get d5Light() {
    return { ...this.fs48, ...this.light };
  },
  get d5Regular() {
    return { ...this.fs48, ...this.regular };
  },
  get d5Medium() {
    return { ...this.fs48, ...this.medium };
  },
  get d5SemiBold() {
    return { ...this.fs48, ...this.semiBold };
  },
  get d5Bold() {
    return { ...this.fs48, ...this.bold };
  },
  get d5ExtraBold() {
    return { ...this.fs48, ...this.extraBold };
  },

  get d6Light() {
    return { ...this.fs40, ...this.light };
  },
  get d6Regular() {
    return { ...this.fs40, ...this.regular };
  },
  get d6Medium() {
    return { ...this.fs40, ...this.medium };
  },
  get d6SemiBold() {
    return { ...this.fs40, ...this.semiBold };
  },
  get d6Bold() {
    return { ...this.fs40, ...this.bold };
  },
  get d6ExtraBold() {
    return { ...this.fs40, ...this.extraBold };
  },

  // Font sizes heading
  get h1Light() {
    return { ...this.fs32, ...this.light };
  },
  get h1Regular() {
    return { ...this.fs32, ...this.regular };
  },
  get h1Medium() {
    return { ...this.fs32, ...this.medium };
  },
  get h1SemiBold() {
    return { ...this.fs32, ...this.semiBold };
  },
  get h1Bold() {
    return { ...this.fs32, ...this.bold };
  },
  get h1ExtraBold() {
    return { ...this.fs32, ...this.extraBold };
  },

  get h2Light() {
    return { ...this.fs28, ...this.light };
  },
  get h2Regular() {
    return { ...this.fs28, ...this.regular };
  },
  get h2Medium() {
    return { ...this.fs28, ...this.medium };
  },
  get h2SemiBold() {
    return { ...this.fs28, ...this.semiBold };
  },
  get h2Bold() {
    return { ...this.fs28, ...this.bold };
  },
  get h2ExtraBold() {
    return { ...this.fs28, ...this.extraBold };
  },

  get h3Light() {
    return { ...this.fs24, ...this.light };
  },
  get h3Regular() {
    return { ...this.fs24, ...this.regular };
  },
  get h3Medium() {
    return { ...this.fs24, ...this.medium };
  },
  get h3SemiBold() {
    return { ...this.fs24, ...this.semiBold };
  },
  get h3Bold() {
    return { ...this.fs24, ...this.bold };
  },
  get h3ExtraBold() {
    return { ...this.fs24, ...this.extraBold };
  },

  get h4Light() {
    return { ...this.fs20, ...this.light };
  },
  get h4Regular() {
    return { ...this.fs20, ...this.regular };
  },
  get h4Medium() {
    return { ...this.fs20, ...this.medium };
  },
  get h4SemiBold() {
    return { ...this.fs20, ...this.semiBold };
  },
  get h4Bold() {
    return { ...this.fs20, ...this.bold };
  },
  get h4ExtraBold() {
    return { ...this.fs20, ...this.extraBold };
  },

  get h5Light() {
    return { ...this.fs16, ...this.light };
  },
  get h5Regular() {
    return { ...this.fs16, ...this.regular };
  },
  get h5Medium() {
    return { ...this.fs16, ...this.medium };
  },
  get h5SemiBold() {
    return { ...this.fs16, ...this.semiBold };
  },
  get h5Bold() {
    return { ...this.fs16, ...this.bold };
  },
  get h5ExtraBold() {
    return { ...this.fs16, ...this.extraBold };
  },

  get h6Light() {
    return { ...this.fs12, ...this.light };
  },
  get h6Regular() {
    return { ...this.fs12, ...this.regular };
  },
  get h6Medium() {
    return { ...this.fs12, ...this.medium };
  },
  get h6SemiBold() {
    return { ...this.fs12, ...this.semiBold };
  },
  get h6Bold() {
    return { ...this.fs12, ...this.bold };
  },
  get h6ExtraBold() {
    return { ...this.fs12, ...this.extraBold };
  },

  // Font sizes sub heading
  get sh1() {
    return { ...this.fs32, ...this.medium };
  },
  get sh2() {
    return { ...this.fs28, ...this.medium };
  },
  get sh3() {
    return { ...this.fs24, ...this.medium };
  },
  get sh4() {
    return { ...this.fs22, ...this.medium };
  },
  get sh5() {
    return { ...this.fs18, ...this.medium };
  },
  get sh6() {
    return { ...this.fs16, ...this.medium };
  },

  // Body-Large
  get bodyLgLight() {
    return { ...this.fs18, ...this.light };
  },
  get bodyLgRegular() {
    return { ...this.fs18, ...this.regular };
  },
  get bodyLgMedium() {
    return { ...this.fs18, ...this.medium };
  },
  get bodyLgSemibold() {
    return { ...this.fs18, ...this.semiBold };
  },
  get bodyLgBold() {
    return { ...this.fs18, ...this.bold };
  },

  // Body-Medium
  get bodyMdLight() {
    return { ...this.fs16, ...this.light };
  },
  get bodyMdRegular() {
    return { ...this.fs16, ...this.regular };
  },
  get bodyMdMedium() {
    return { ...this.fs16, ...this.medium };
  },
  get bodyMdSemibold() {
    return { ...this.fs16, ...this.semiBold };
  },
  get bodyMdBold() {
    return { ...this.fs16, ...this.bold };
  },

  // Body-Small
  get bodySmLight() {
    return { ...this.fs14, ...this.light };
  },
  get bodySmRegular() {
    return { ...this.fs14, ...this.regular };
  },
  get bodySmMedium() {
    return { ...this.fs14, ...this.medium };
  },
  get bodySmSemibold() {
    return { ...this.fs14, ...this.semiBold };
  },
  get bodySmBold() {
    return { ...this.fs14, ...this.bold };
  },

  // Body-XSmall
  get bodyXsLight() {
    return { ...this.fs12, ...this.light };
  },
  get bodyXsRegular() {
    return { ...this.fs12, ...this.regular };
  },
  get bodyXsMedium() {
    return { ...this.fs12, ...this.medium };
  },
  get bodyXsSemibold() {
    return { ...this.fs12, ...this.semiBold };
  },
  get bodyXsBold() {
    return { ...this.fs12, ...this.bold };
  },

  // Caption
  get captionLight() {
    return { ...this.fs10, ...this.light };
  },
  get captionRegular() {
    return { ...this.fs10, ...this.regular };
  },
  get captionMedium() {
    return { ...this.fs10, ...this.medium };
  },
  get captionSemibold() {
    return { ...this.fs10, ...this.semiBold };
  },
  get captionBold() {
    return { ...this.fs10, ...this.bold };
  },

  // Default style for TextBase widget
  get defaultTextBase() {
    return this.bodyMdRegular;
  },
};
