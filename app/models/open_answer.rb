class OpenAnswer < ApplicationRecord
  belongs_to :question
  belongs_to :survey
end
