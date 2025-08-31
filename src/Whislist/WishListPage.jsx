import { useWishlist } from "../conText/Whishlist";
import Nav from "../Nav/Nav";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <> 
      <Nav />
              <div className="wishlist-container-777">
        <div className="wishlist-header-777">
          <h2 className="wishlist-title-777">My Wishlist</h2>
          <span className="wishlist-count-777">{wishlist.length} items</span>
        </div>
        
        {wishlist.length === 0 ? (
          <div className="empty-wishlist-777">
            <div className="empty-icon-777">💝</div>
            <p className="empty-message-777">Your wishlist is empty</p>
            <p className="empty-subtitle-777">Add some comics to get started!</p>
          </div>
        ) : (
          <div className="wishlist-grid-777">
            {wishlist.map(comic => (
              <div key={comic.id} className="wishlist-card-777">
                <div className="card-image-container-777">
                  <img 
                    src={`https://image.tmdb.org/t/p/w300/${comic.backdrop_path}`} 
                    alt={comic.title}
                    className="card-image-777"
                  />
                  <div className="card-overlay-777">
                    <button className="remove-btn-777" title="Remove from wishlist">
                      ❌
                    </button>
                  </div>
                </div>
                <div className="card-content-777">
                  <h3 className="card-title-777">{comic.title}</h3>
                  {comic.release_date && (
                    <p className="card-year-777">
                      {new Date(comic.release_date).getFullYear()}
                    </p>
                  )}
                  {comic.vote_average && (
                    <div className="card-rating-777">
                      <span className="rating-star-777">⭐</span>
                      <span className="rating-value-777">{comic.vote_average.toFixed(1)}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistPage;