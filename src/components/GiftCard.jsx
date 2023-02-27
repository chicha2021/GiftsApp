import PropTypes from 'prop-types';

export const GiftCard = ({title, url, id}) => {
    return (
        <div key={id} className={'card'} id={ Math.random() }>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GiftCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};