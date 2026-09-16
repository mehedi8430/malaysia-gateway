export default function OfficeMap() {
  return (
    <iframe
      title="Office Map"
      src="https://www.google.com/maps?q=House+123,+Road+5,+Dhanmondi,+Dhaka-1205,+Bangladesh&output=embed"
      className="h-[200px] w-full overflow-hidden rounded-xl border border-white/20"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}