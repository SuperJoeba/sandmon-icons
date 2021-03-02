import * as allIconDefs from '@ant-design/icons-svg';
import { IconDefinition } from '@ant-design/icons-svg/es/types';
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/lib/helpers';

export type AngularTheme = 'fill' | 'outline' | 'twotone';

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
}

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(allIconDefs).map(svgIdentifier => {
      const iconDef = (allIconDefs as {[id: string]: IconDefinition})[svgIdentifier];
      return fn({svgIdentifier, ...iconDef});
    })
  );
}

