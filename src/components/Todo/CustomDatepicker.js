import { enGB } from 'date-fns/locale';
import { PropTypes } from 'prop-types';
import React from 'react';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function CustomDatepicker({ date, handler, complete }) {
    return (
        <span className="datepicker--icon ">
            <DatePicker
                date={date}
                onDateChange={(date) => handler(date)}
                format="dd/MM/yyyy"
                name="date"
                value={date}
                locale={enGB}>
                {({ inputProps, focused }) => (
                    <input
                        disabled={complete}
                        className={'input' + (focused ? ' -focused' : '')}
                        {...inputProps}
                    />
                )}
            </DatePicker>
        </span>
    );
}
CustomDatepicker.propTypes = {
    date: PropTypes.object.isRequired,
    handler: PropTypes.func
};

export default CustomDatepicker;
