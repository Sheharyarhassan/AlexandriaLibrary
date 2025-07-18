'use client';

import React, {useState} from 'react';
import Select, {components} from 'react-select';
import country from '@/utils/country';

export default function CountrySelect() {
  const options = country.map((c) => ({
    value: c.id,
    label: c.countryName,
    country: c,
  }));

  const [selectedOption, setSelectedOption] = useState(
    options.length > 0 ? options[0] : null
  );

  const customSingleValue = ({data}) => (
    <div className="flex items-center gap-2">
      <img
        src={data.country.flagImg}
        alt={data.country.countryName}
        className="w-5 h-4 rounded-sm"
      />
      <span>{data.country.countryName}</span>
    </div>
  );

  const customOption = (props) => {
    const {data, innerRef, innerProps} = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
      >
        <img
          src={data.country.flagImg}
          alt={data.country.countryName}
          className="w-5 h-4 rounded-sm"
        />
        <span>{data.country.countryName}</span>
      </div>
    );
  };

  const customValueContainer = ({children, ...props}) => {
    const [singleValue /* , input */] = children;
    return (
      <components.ValueContainer {...props}>
        {singleValue}
        {/* input is intentionally excluded */}
      </components.ValueContainer>
    );
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        components={{
          SingleValue: customSingleValue,
          Option: customOption,
          ValueContainer: customValueContainer, // 👈 added to remove input space
        }}
        classNames={{
          control: () => 'border border-gray-300 rounded-[9px] p-1 my-[7.5px]',
          menu: () => 'mt-1 border border-gray-200 rounded-[9px] shadow-sm',
        }}
      />
    </div>
  );
}
