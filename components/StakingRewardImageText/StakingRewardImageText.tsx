import { REVALIDATIONS } from '@/lib/constants';
import { NETWORK_API } from '@/lib/network_api/NetworkApi';
import { condenseNumberWithUnits } from '@/lib/numbers';
import { startCase } from 'lodash';

type Props = {
  fallbackValue: number;
  separator?: string;
  textClasses?: string;
  className?: string;
};

export default async function StakingRewardImageText(props: Props) {
  const { fallbackValue, textClasses, className } = props;

  const data = await NETWORK_API.getInfo(REVALIDATIONS['1H']);
  const stakingRewardPool = data?.token.staking_reward_pool;

  const [value, unit] = condenseNumberWithUnits({
    number: stakingRewardPool || fallbackValue,
    decimals: 0,
    shorthand: false,
  });

  return (
    <div className={className}>
      <div className={textClasses}>
        <span>{value}</span>
        {props.separator && <span>{props.separator}</span>}
        <span>{startCase(unit)}</span>
      </div>
    </div>
  );
}
