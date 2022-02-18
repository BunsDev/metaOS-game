import { PageContainer } from 'components/Container';
import { GuildList } from 'components/Guild/GuildList';
import { HeadComponent } from 'components/Seo';
import { GuildFragmentFragment } from 'graphql/autogen/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import SearchFilters from '../../components/SearchFilters';
import { getGuildsByText } from '../../graphql/queries/guild';
import { GlobalFilters } from '../../utils/GlobalSearch';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const GuildSearchPage = () => {
  const { query } = useRouter();
  const [guilds, setGuilds] = useState<GuildFragmentFragment[]>([]);
  const search: string = decodeURI(query.q as string);
  useEffect(() => {
    if (search) {
      const getData = async () => {
        const res = await getGuildsByText(search);
        setGuilds(res.guilds);
      };
      getData();
    }
  }, [search]);
  return (
    <PageContainer>
      <HeadComponent url="https://my.metagame.wtf/community/search" />
      <SearchFilters activeFilter={GlobalFilters.GUILDS} search={search} />
      <GuildList guilds={guilds} />
    </PageContainer>
  );
};
export default GuildSearchPage;
