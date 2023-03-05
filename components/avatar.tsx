import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
  size?: number;
};

const Avatar = ({ name, picture, size = 64 }: Props) => {
  return (
    <div className="flex items-center">
      <Image src={picture} alt={name} width={size} height={size} />
      <div>{name}</div>
    </div>
  );
};

export default Avatar;
