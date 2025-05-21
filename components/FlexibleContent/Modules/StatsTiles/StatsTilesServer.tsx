import { REVALIDATIONS } from '@/lib/constants';

import { NETWORK_API } from '@/lib/network_api/NetworkApi';
import StatsTiles from './StatsTiles';

export type StatTile = {
  figure: string;
  copy: string;
  backgroundImage: any;
};

export default async function StatsTilesServer(props: { tiles: Array<StatTile> }) {
  const data = await NETWORK_API.getInfo(REVALIDATIONS['1H']);
  const nodeCount = data?.network.network_size.toString();
  const stakingRewardPool = data?.token.staking_reward_pool.toString();

  const tiles: Array<StatTile> = props.tiles.map((tile) => {
    if (nodeCount && tile.copy === 'Nodes') {
      return { ...tile, figure: nodeCount };
    }
    if (stakingRewardPool && tile.copy === 'SESH in Staking Reward Pool') {
      return { ...tile, figure: stakingRewardPool };
    }
    return tile;
  });

  return <StatsTiles tiles={tiles} />;
}
