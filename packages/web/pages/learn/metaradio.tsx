import { LoadingState } from '@metafam/ds';
import { PageContainer } from 'components/Container';
import { HeadComponent } from 'components/Seo';
import React, { useState } from 'react';
import { descriptions } from 'utils/menuLinks';

const MetaRadioPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <PageContainer p={0} position="fixed">
      {loading && <LoadingState position="absolute" />}
      <HeadComponent
        title="MetaRadio by MetaFam"
        description={descriptions.metaradio}
        url="https://anchor.fm/MetaGame/"
      />
      <iframe
        title="MetaRadio by MetaFam"
        src="https://anchor.fm/MetaGame/"
        onLoad={() => setLoading(false)}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </PageContainer>
  );
};

export default MetaRadioPage;
