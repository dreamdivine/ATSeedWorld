class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, presence: true
  validates :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :reviews,
  foreign_key: :user_id,
  class_name: :Review

  has_many :basket_items,
  foreign_key: :user_id,
  class_name: :BasketItem


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
