export default function InputBox({ location, searchLocation, setLocation }) {
    return (
        <input
          className='locationInput'
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          type="text"
        />
    )
}