import dayjs from "dayjs";

const CardWeather = ({ current, location }) => {
  const { name, country, region, localtime, tz_id } = location;
  const { temp_c, temp_f, condition } = current;

  return (
    <div className="bg-gray-700 p-6 text-gray-300 w-[20em] rounded-md z-10 relative">
      <div>
        {/* <h2 className="font-bold">Location</h2> */}

        <h2 className="font-bold text-2xl mb-2">{name}</h2>
        <p>{`Country: ${country}`}</p>
        <p>{`Region: ${region}`}</p>
        {/* <p>{`Ciudad: ${name}`}</p> */}
        <p>{`Local Time: ${dayjs(localtime).format("hh:mm A")}`}</p>
        <p>{`Time Zone: ${tz_id}`}</p>
      </div>

      <div className="flex items-center gap-3">
        <img src={condition.icon} alt="" />
        <div>
          <p className="text-4xl font-bold">
            {temp_c}
            <sup className="text-xl">°C</sup>
          </p>
          {/* <p className="text-4xl">{`${temp_c} °C`}</p> */}
          {/* <p className="text-4xl">{`${temp_f} °F`}</p> */}
        </div>
      </div>

      {/* {console.log(location)} */}
    </div>
  );
};
export default CardWeather;
