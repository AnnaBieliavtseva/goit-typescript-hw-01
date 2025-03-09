type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, 'name' | 'color'>
type BotttomType = Pick<AllType, 'position' | 'weight'>

function compare(top: TopType, bottom: BotttomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log(compare);
