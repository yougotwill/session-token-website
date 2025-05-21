import { AnimatedElement } from '@/components/AnimatedComponent/AnimatedComponent';
import { LOCALE_DEFAULTS } from '@/lib/constants';
import { log } from '@/lib/logger';
import { formatNumberToLocaleString } from '@/lib/numbers';
import clsx from 'clsx';
import type { RewardStatsDataType } from './Hero';

const localeStringOptions: Intl.NumberFormatOptions = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: true,
};

export default function RewardStats({
  data,
  className,
}: {
  data: RewardStatsDataType;
  className?: string;
}) {
  // TODO: Cleanup settings schema and remove this line
  // const { rewards } = useContext(SettingsContext);

  if (!data || !data.nodeCount) {
    log.error('No reward stats data!');
    return null;
  }

  const { stakingRequirement, nodeCount, totalStaked, stakingRewardPool } = data;

  if (!stakingRequirement || !nodeCount || !totalStaked || !stakingRewardPool) {
    log.error('Missing some reward stats data!');
    return null;
  }

  const stakingRequirementString = `${formatNumberToLocaleString(stakingRequirement, localeStringOptions)} ${LOCALE_DEFAULTS.token_name_short}`;
  const stakingRewardPoolString = `${formatNumberToLocaleString(stakingRewardPool, localeStringOptions)} ${LOCALE_DEFAULTS.token_name_short}`;
  const totalStakedString = `${formatNumberToLocaleString(totalStaked, localeStringOptions)} ${LOCALE_DEFAULTS.token_name_short}`;
  const nodeCountString = formatNumberToLocaleString(nodeCount, localeStringOptions);

  const comingSoonRewardsData = [
    {
      _key: '1',
      title: 'Staking requirement',
      copy: stakingRequirementString,
    },
    {
      _key: '2',
      title: 'Reward pool',
      copy: stakingRewardPoolString,
    },
    {
      _key: '3',
      title: 'Total staked',
      copy: totalStakedString,
    },
    {
      _key: '4',
      title: 'Total nodes',
      copy: nodeCountString,
    },
  ];

  return (
    <AnimatedElement
      className={clsx(
        'absolute top-28 z-20 aspect-square max-w-[75vh] p-8 pt-14 text-center',
        'md:p-24 md:pt-28',
        'lg:right-0 lg:max-w-80 lg:p-0 lg:pt-8',
        className
      )}
      delay={400}
    >
      <h3
        className={clsx(
          'relative whitespace-nowrap bg-gradient-to-tl from-[#FFFFFF] to-[#97A99E] bg-clip-text text-4xl text-transparent'
        )}
      >
        Live Reward Stats
      </h3>
      <ul className="mt-2 flex select-none flex-col items-center justify-center gap-1 lg:items-end lg:justify-end lg:text-end">
        {comingSoonRewardsData.map(({ _key, title, copy }) => {
          return (
            <li key={_key}>
              <span>
                {title}: <strong className={clsx('font-medium')}>{copy}</strong>
              </span>
            </li>
          );
        })}
      </ul>
    </AnimatedElement>
  );
}
