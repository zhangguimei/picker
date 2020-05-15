import * as React from 'react';

export interface PrefixProps<DateType> {
  values: [DateType, DateType];
}

export default function Prefix<DateType>({ values }: PrefixProps<DateType>) {
  if (values && values[0] && values[1]) {
    return '当天';
  }
  return null;
}
