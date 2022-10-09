import EventCard from "../components/EventCard"

export default function Events() {
    return (
        <div className="bg-gray-100 px-2">
            <div className="container mx-auto" style={{maxWidth: "800px"}}>
                <h1 className="text-6xl font-semibold text-center py-6">Events</h1>
                <h2 className="text-4xl font-semibold bg-sky-500 py-4 px-2 rounded-lg text-white text-center">Upcoming events
                </h2>
                <div className="py-6 mx-auto" style={{ maxWidth: "900px" }}>
                    <EventCard></EventCard>
                </div>
                <div className="border-t-2 py-4">
                    <h2 className="text-4xl font-semibold">Past events</h2>
                    <div className="py-6 mx-auto" style={{ maxWidth: "900px" }}>
                    <EventCard></EventCard>
                </div>
                </div>
            </div>
        </div>
    )
}