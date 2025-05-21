import clsx from 'clsx';

import { REVALIDATIONS } from '@/lib/constants';
import { NETWORK_API } from '@/lib/network_api/NetworkApi';
import type { HeroSchemaType, HeroVariantType } from '@/schemas/objects/flexibleSections/hero';
import HeroClient from './HeroClient';

export type RewardStatsDataType = {
  stakingRequirement?: number;
  nodeCount?: number;
  totalStaked?: number;
  stakingRewardPool?: number;
};

export default async function Hero(props: HeroSchemaType) {
  const { variant: _variant } = props;
  const variant = _variant as HeroVariantType;

  const data = await NETWORK_API.getInfo(REVALIDATIONS['1H']);
  const stakingRequirement = data?.token.staking_requirement;
  const nodeCount = data?.network.network_size;
  const totalStaked = data?.network.network_staked_tokens;
  const stakingRewardPool = data?.token.staking_reward_pool;

  return (
    <section
      className={clsx(
        'flex h-dvh w-full flex-col-reverse items-center justify-around justify-items-end pt-20 align-middle',
        variant === 'copyImageStatsHero' ? 'lg:pt-32' : 'lg:grid lg:grid-cols-2 lg:py-20'
      )}
    >
      <HeroClient
        {...props}
        rewardStatsData={{ stakingRequirement, nodeCount, totalStaked, stakingRewardPool }}
      />
    </section>
  );
}
