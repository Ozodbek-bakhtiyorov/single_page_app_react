export const d_flex = (direction, align, justify) => {
  return `
    display:flex;
    flex-direction:${direction};
    align-items:${align};
    justify-content:${justify}
  `;
};
export const d_flex_ai = (direction, align) => {
  return `
  display:flex;
  flex-direction:${direction};
  align-items:${align};`;
};

export const d_flex_jc = (direction, justify)=>{
  return `
  display:flex;
  flex-direction:${direction};
  justify-content:${justify}
  `
}
export const d_grid = (gap,size)=>{
  return `
  display:grid;
  grid-gap:${gap};
  grid-template-columns:repeat(auto-fill,minmax(${size},1fr));
  `
}
export const transition = (time)=>{
  return `
    transition: all ${time} var(--custom-transition);
  `
}