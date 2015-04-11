class Todo < ActiveRecord::Base
  enum status:[:active,:complete]

end
