import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function CalendarView() {
  const events = [
    {
      id: 1,
      title: 'Chamika Prasad',
      start: new Date(2025, 4, 16, 9, 11), // May 16 2025, 9:11 AM
      end: new Date(2025, 4, 16, 10, 11), // May 16 2025, 10:11 AM
    },
    {
      id: 2,
      title: 'H.P. Amal Perera',
      start: new Date(2025, 4, 5, 11, 11),
      end: new Date(2025, 4, 5, 12, 12),
    },
    // Add more events from your appointment list
  ];

  return (
    <div className="h-[800px]">
      <h1 className="text-2xl font-bold mb-6">Appointment Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        defaultView="week"
        views={['month', 'week', 'day', 'agenda']}
        selectable
        onSelectEvent={event => alert(`Selected: ${event.title}`)}
      />
    </div>
  );
}