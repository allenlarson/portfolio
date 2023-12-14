import { Skeleton } from '@mui/material';

const CardSkeleton = () => {
  return (
    <div className="card-skeleton rounded-2xl m-2 w-1/4">
      <Skeleton variant="rounded" height={460} width={364} animation="wave" />
    </div>
  );
};

export default CardSkeleton;
