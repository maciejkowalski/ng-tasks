class TemplatesController < ApplicationController
  def main
    render layout: false
  end

  def profile
    render layout: false
  end
end
