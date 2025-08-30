import { ds } from '@core/general-helpers/extensions';

export const themeBorder = {
  // border Circular
  get bc0() {
    return { borderRadius: ds(0) };
  },
  get bc2() {
    return { borderRadius: ds(2) };
  },
  get bc4() {
    return { borderRadius: ds(4) };
  },
  get bc8() {
    return { borderRadius: ds(8) };
  },
  get bc12() {
    return { borderRadius: ds(12) };
  },
  get bc16() {
    return { borderRadius: ds(16) };
  },
  get bc24() {
    return { borderRadius: ds(24) };
  },
  get bc32() {
    return { borderRadius: ds(32) };
  },

  // border top right
  get btr4() {
    return { borderTopRightRadius: ds(4) };
  },
  get btr8() {
    return { borderTopRightRadius: ds(8) };
  },
  get btr12() {
    return { borderTopRightRadius: ds(12) };
  },
  get btr16() {
    return { borderTopRightRadius: ds(16) };
  },
  get btr24() {
    return { borderTopRightRadius: ds(24) };
  },
  get btr32() {
    return { borderTopRightRadius: ds(32) };
  },

  // border top left
  get btl4() {
    return { borderTopLeftRadius: ds(4) };
  },
  get btl8() {
    return { borderTopLeftRadius: ds(8) };
  },
  get btl12() {
    return { borderTopLeftRadius: ds(12) };
  },
  get btl16() {
    return { borderTopLeftRadius: ds(16) };
  },
  get btl24() {
    return { borderTopLeftRadius: ds(24) };
  },
  get btl32() {
    return { borderTopLeftRadius: ds(32) };
  },

  // border bottom right
  get bbr4() {
    return { borderBottomRightRadius: ds(4) };
  },
  get bbr8() {
    return { borderBottomRightRadius: ds(8) };
  },
  get bbr12() {
    return { borderBottomRightRadius: ds(12) };
  },
  get bbr16() {
    return { borderBottomRightRadius: ds(16) };
  },
  get bbr24() {
    return { borderBottomRightRadius: ds(24) };
  },
  get bbr32() {
    return { borderBottomRightRadius: ds(32) };
  },

  // border bottom left
  get bbl4() {
    return { borderBottomLeftRadius: ds(4) };
  },
  get bbl8() {
    return { borderBottomLeftRadius: ds(8) };
  },
  get bbl12() {
    return { borderBottomLeftRadius: ds(12) };
  },
  get bbl16() {
    return { borderBottomLeftRadius: ds(16) };
  },
  get bbl24() {
    return { borderBottomLeftRadius: ds(24) };
  },
  get bbl32() {
    return { borderBottomLeftRadius: ds(32) };
  },

  // border top
  get bt4() {
    return { borderTopLeftRadius: ds(4), borderTopRightRadius: ds(4) };
  },
  get bt8() {
    return { borderTopLeftRadius: ds(8), borderTopRightRadius: ds(8) };
  },
  get bt12() {
    return { borderTopLeftRadius: ds(12), borderTopRightRadius: ds(12) };
  },
  get bt16() {
    return { borderTopLeftRadius: ds(16), borderTopRightRadius: ds(16) };
  },
  get bt24() {
    return { borderTopLeftRadius: ds(24), borderTopRightRadius: ds(24) };
  },
  get bt32() {
    return { borderTopLeftRadius: ds(32), borderTopRightRadius: ds(32) };
  },

  // border bottom
  get bb4() {
    return { borderBottomLeftRadius: ds(4), borderBottomRightRadius: ds(4) };
  },
  get bb8() {
    return { borderBottomLeftRadius: ds(8), borderBottomRightRadius: ds(8) };
  },
  get bb12() {
    return { borderBottomLeftRadius: ds(12), borderBottomRightRadius: ds(12) };
  },
  get bb16() {
    return { borderBottomLeftRadius: ds(16), borderBottomRightRadius: ds(16) };
  },
  get bb24() {
    return { borderBottomLeftRadius: ds(24), borderBottomRightRadius: ds(24) };
  },
  get bb32() {
    return { borderBottomLeftRadius: ds(32), borderBottomRightRadius: ds(32) };
  },

  // border right
  get br4() {
    return { borderTopRightRadius: ds(4), borderBottomRightRadius: ds(4) };
  },
  get br8() {
    return { borderTopRightRadius: ds(8), borderBottomRightRadius: ds(8) };
  },
  get br12() {
    return { borderTopRightRadius: ds(12), borderBottomRightRadius: ds(12) };
  },
  get br16() {
    return { borderTopRightRadius: ds(16), borderBottomRightRadius: ds(16) };
  },
  get br24() {
    return { borderTopRightRadius: ds(24), borderBottomRightRadius: ds(24) };
  },
  get br32() {
    return { borderTopRightRadius: ds(32), borderBottomRightRadius: ds(32) };
  },

  // border left
  get bl4() {
    return { borderTopLeftRadius: ds(4), borderBottomLeftRadius: ds(4) };
  },
  get bl8() {
    return { borderTopLeftRadius: ds(8), borderBottomLeftRadius: ds(8) };
  },
  get bl12() {
    return { borderTopLeftRadius: ds(12), borderBottomLeftRadius: ds(12) };
  },
  get bl16() {
    return { borderTopLeftRadius: ds(16), borderBottomLeftRadius: ds(16) };
  },
  get bl24() {
    return { borderTopLeftRadius: ds(24), borderBottomLeftRadius: ds(24) };
  },
  get bl32() {
    return { borderTopLeftRadius: ds(32), borderBottomLeftRadius: ds(32) };
  },

  ///////////////////////////// BORDER BY SIZE //////////////////////////////
  get radiusNull() {
    return { borderRadius: ds(0) };
  },
  get radiusXXS() {
    return this.bc2;
  },
  get radiusXS() {
    return this.bc4;
  },
  get radiusSM() {
    return this.bc8;
  },
  get radiusMD() {
    return this.bc12;
  },
  get radiusLG() {
    return this.bc16;
  },
  get radiusXL() {
    return this.bc24;
  },
  get radiusXXL() {
    return this.bc32;
  },
};
