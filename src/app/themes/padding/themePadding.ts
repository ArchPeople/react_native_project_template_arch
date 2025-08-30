import { ds } from '@core/general-helpers/extensions';

export const themePadding = {
  // Padding Horizontal
  get ph0() {
    return { paddingHorizontal: ds(0) };
  },
  get ph2() {
    return { paddingHorizontal: ds(2) };
  },
  get ph4() {
    return { paddingHorizontal: ds(4) };
  },
  get ph8() {
    return { paddingHorizontal: ds(8) };
  },
  get ph12() {
    return { paddingHorizontal: ds(12) };
  },
  get ph16() {
    return { paddingHorizontal: ds(16) };
  },
  get ph20() {
    return { paddingHorizontal: ds(20) };
  },
  get ph24() {
    return { paddingHorizontal: ds(24) };
  },
  get ph32() {
    return { paddingHorizontal: ds(32) };
  },

  // Padding Vertical
  get pv0() {
    return { paddingVertical: ds(0) };
  },
  get pv2() {
    return { paddingVertical: ds(2) };
  },
  get pv4() {
    return { paddingVertical: ds(4) };
  },
  get pv8() {
    return { paddingVertical: ds(8) };
  },
  get pv12() {
    return { paddingVertical: ds(12) };
  },
  get pv16() {
    return { paddingVertical: ds(16) };
  },
  get pv20() {
    return { paddingVertical: ds(20) };
  },
  get pv24() {
    return { paddingVertical: ds(24) };
  },
  get pv32() {
    return { paddingVertical: ds(32) };
  },

  // Padding All
  get pa0() {
    return { padding: ds(0) };
  },
  get pa2() {
    return { padding: ds(2) };
  },
  get pa4() {
    return { padding: ds(4) };
  },
  get pa8() {
    return { padding: ds(8) };
  },
  get pa12() {
    return { padding: ds(12) };
  },
  get pa16() {
    return { padding: ds(16) };
  },
  get pa20() {
    return { padding: ds(20) };
  },
  get pa24() {
    return { padding: ds(24) };
  },
  get pa32() {
    return { padding: ds(32) };
  },

  // Padding only bottom
  get pb0() {
    return { paddingBottom: ds(0) };
  },
  get pb2() {
    return { paddingBottom: ds(2) };
  },
  get pb4() {
    return { paddingBottom: ds(4) };
  },
  get pb8() {
    return { paddingBottom: ds(8) };
  },
  get pb12() {
    return { paddingBottom: ds(12) };
  },
  get pb16() {
    return { paddingBottom: ds(16) };
  },
  get pb20() {
    return { paddingBottom: ds(20) };
  },
  get pb24() {
    return { paddingBottom: ds(24) };
  },
  get pb32() {
    return { paddingBottom: ds(32) };
  },

  // Padding only top
  get pt0() {
    return { paddingTop: ds(0) };
  },
  get pt2() {
    return { paddingTop: ds(2) };
  },
  get pt4() {
    return { paddingTop: ds(4) };
  },
  get pt8() {
    return { paddingTop: ds(8) };
  },
  get pt12() {
    return { paddingTop: ds(12) };
  },
  get pt16() {
    return { paddingTop: ds(16) };
  },
  get pt20() {
    return { paddingTop: ds(20) };
  },
  get pt24() {
    return { paddingTop: ds(24) };
  },
  get pt32() {
    return { paddingTop: ds(32) };
  },

  // Padding only left
  get pl0() {
    return { paddingLeft: ds(0) };
  },
  get pl2() {
    return { paddingLeft: ds(2) };
  },
  get pl4() {
    return { paddingLeft: ds(4) };
  },
  get pl8() {
    return { paddingLeft: ds(8) };
  },
  get pl12() {
    return { paddingLeft: ds(12) };
  },
  get pl16() {
    return { paddingLeft: ds(16) };
  },
  get pl20() {
    return { paddingLeft: ds(20) };
  },
  get pl24() {
    return { paddingLeft: ds(24) };
  },
  get pl32() {
    return { paddingLeft: ds(32) };
  },

  // Padding only right
  get pr0() {
    return { paddingRight: ds(0) };
  },
  get pr2() {
    return { paddingRight: ds(2) };
  },
  get pr4() {
    return { paddingRight: ds(4) };
  },
  get pr8() {
    return { paddingRight: ds(8) };
  },
  get pr12() {
    return { paddingRight: ds(12) };
  },
  get pr16() {
    return { paddingRight: ds(16) };
  },
  get pr20() {
    return { paddingRight: ds(20) };
  },
  get pr24() {
    return { paddingRight: ds(24) };
  },
  get pr32() {
    return { paddingRight: ds(32) };
  },

  ///////////////////////////// PADDING SPACING BY SIZE //////////////////////////////

  // Padding Horizontal Spacing
  get phNull() {
    return this.ph0;
  },
  get phXXS() {
    return this.ph2;
  },
  get phXS() {
    return this.ph4;
  },
  get phSM() {
    return this.ph8;
  },
  get phMD() {
    return this.ph12;
  },
  get phLG() {
    return this.ph16;
  },
  get phXL() {
    return this.ph24;
  },
  get phXXL() {
    return this.ph32;
  },

  // Padding Vertical Spacing
  get pvNull() {
    return this.pv0;
  },
  get pvXXS() {
    return this.pv2;
  },
  get pvXS() {
    return this.pv4;
  },
  get pvSM() {
    return this.pv8;
  },
  get pvMD() {
    return this.pv12;
  },
  get pvLG() {
    return this.pv16;
  },
  get pvXL() {
    return this.pv24;
  },
  get pvXXL() {
    return this.pv32;
  },

  // Padding All Spacing
  get paNull() {
    return this.pa0;
  },
  get paXXS() {
    return this.pa2;
  },
  get paXS() {
    return this.pa4;
  },
  get paSM() {
    return this.pa8;
  },
  get paMD() {
    return this.pa12;
  },
  get paLG() {
    return this.pa16;
  },
  get paXL() {
    return this.pa24;
  },
  get paXXL() {
    return this.pa32;
  },

  // Padding Only Bottom Spacing
  get pbNull() {
    return this.pb0;
  },
  get pbXXS() {
    return this.pb2;
  },
  get pbXS() {
    return this.pb4;
  },
  get pbSM() {
    return this.pb8;
  },
  get pbMD() {
    return this.pb12;
  },
  get pbLG() {
    return this.pb16;
  },
  get pbXL() {
    return this.pb24;
  },
  get pbXXL() {
    return this.pb32;
  },

  // Padding Only Top Spacing
  get ptNull() {
    return this.pt0;
  },
  get ptXXS() {
    return this.pt2;
  },
  get ptXS() {
    return this.pt4;
  },
  get ptSM() {
    return this.pt8;
  },
  get ptMD() {
    return this.pt12;
  },
  get ptLG() {
    return this.pt16;
  },
  get ptXL() {
    return this.pt24;
  },
  get ptXXL() {
    return this.pt32;
  },

  // Padding Only Left Spacing
  get plNull() {
    return this.pl0;
  },
  get plXXS() {
    return this.pl2;
  },
  get plXS() {
    return this.pl4;
  },
  get plSM() {
    return this.pl8;
  },
  get plMD() {
    return this.pl12;
  },
  get plLG() {
    return this.pl16;
  },
  get plXL() {
    return this.pl24;
  },
  get plXXL() {
    return this.pl32;
  },

  // Padding Only Right Spacing
  get prNull() {
    return this.pr0;
  },
  get prXXS() {
    return this.pr2;
  },
  get prXS() {
    return this.pr4;
  },
  get prSM() {
    return this.pr8;
  },
  get prMD() {
    return this.pr12;
  },
  get prLG() {
    return this.pr16;
  },
  get prXL() {
    return this.pr24;
  },
  get prXXL() {
    return this.pr32;
  },
};
