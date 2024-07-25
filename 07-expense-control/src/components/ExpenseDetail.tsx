import { useMemo } from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import { fomratDate } from '../helpers';
import { TexpenseDetailProps } from '../types';
import AmountDisplay from './AmountDisplay';
import { categories } from '../data';
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from '../hooks/useBudget';

export default function ExpenseDetail({ expense }: TexpenseDetailProps) {
  const categoryInfo = useMemo(() => categories.filter((cat) => cat.id === expense.expenseCategory)[0], [expense]);
  const { dispatch } = useBudget();

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>Action name</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem maxSwipe={1.0} leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
          <div>
            <img
              src={`/img/icono_${categoryInfo.icon.toLocaleLowerCase()}.svg`}
              alt={`${categoryInfo.name}`}
              className="w-20"
            />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name} </p>
            <p> {expense.expenseName} </p>
            <p className="text-slate-600 text-sm"> {fomratDate(expense.expenseDate)} </p>
          </div>
          <AmountDisplay amount={expense.expenseAmount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}
