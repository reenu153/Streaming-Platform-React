export const EpisodeCard = ({ episode }) => {
  return (
    <div className="cursor-default flex gap-4 my-4 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#222] transition">
      <img
        src={episode?.image?.medium}
        className="w-[120px] h-[80px] object-cover rounded-md"
      />

      <div className="text-white flex-1">
        <div className="font-semibold text-sm">
          {episode?.number}. {episode?.name}
        </div>

        <p className="text-xs text-gray-400 mt-1">
          ⏱ {episode?.runtime || 'N/A'} min
        </p>

        <p className="text-xs text-gray-300 mt-2 line-clamp-3">
          {episode?.summary
            ? episode.summary.replace(/<[^>]*>/g, '')
            : 'No description available.'}
        </p>
      </div>
    </div>
  );
};
