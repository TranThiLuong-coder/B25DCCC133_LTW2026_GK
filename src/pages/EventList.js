import EventTable from "../components/EventTable";

const EventList = ({ events, onRegister, onDelete }) => {
  return (
    <EventTable events={events} onRegister={onRegister} onDelete={onDelete} />
  );
};

export default EventList;