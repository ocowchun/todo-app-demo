class Todo < ActiveRecord::Base
  enum status:[:active,:completed]
end
