import PropTypes from 'prop-types';
export const Keys = ({label,keyClass,onButtonClick}) => {
    const equalClass = 'col-span-2 bg-[#4ccdc6] text-[#1a261a] font-bold text-2xl hover:bg-[#4ccdc6]'
  return (
    <div className={`bg-[#141414] text-white p-4 rounded-lg hover:bg-[#383838] cursor-pointer flex justify-center items-center ${keyClass && equalClass}`}
    onClick={()=>onButtonClick(label)}
    >{label}</div>
  )
}
Keys.propTypes = {
    label: PropTypes.string.isRequired,
    keyClass: PropTypes.string.isRequired,
  };