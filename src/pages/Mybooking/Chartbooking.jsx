import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

const Chartbooking = ({ doctor }) => {
    return (
     <div className="w-full mt-32 container mx-auto">
            <div style={{ width: "50%", height: 500 }}>
                <ResponsiveContainer>
                    <BarChart data={doctor}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="fee" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
     </div>
    );
};

export default Chartbooking;
