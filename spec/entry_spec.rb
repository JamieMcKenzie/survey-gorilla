require 'spec_helper'

describe Entry do
  it {should belong_to :user}
  it {should belong_to :option}
  it {should belong_to :form}
end
